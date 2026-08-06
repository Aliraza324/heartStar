const fs = require('fs');
const data = require('./full_landing.json');
const root = data.nodes['30:4'].document;
const styles = data.nodes['30:4'].styles || {};

function pickFill(f) {
  if (!f) return undefined;
  if (f.type === 'SOLID') {
    const { r, g, b } = f.color;
    const a = f.opacity !== undefined ? f.opacity : f.color.a;
    return { type: 'SOLID', hex: rgbToHex(r, g, b), a };
  }
  if (f.type && f.type.startsWith('GRADIENT')) {
    return {
      type: f.type,
      stops: (f.gradientStops || []).map(s => ({ pos: s.position, hex: rgbToHex(s.color.r, s.color.g, s.color.b), a: s.color.a })),
    };
  }
  if (f.type === 'IMAGE') {
    return { type: 'IMAGE', imageRef: f.imageRef, scaleMode: f.scaleMode };
  }
  return { type: f.type };
}

function rgbToHex(r, g, b) {
  const c = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  return '#' + c(r) + c(g) + c(b);
}

function simplify(node, depth) {
  const out = {
    id: node.id,
    name: node.name,
    type: node.type,
  };
  if (node.absoluteBoundingBox) {
    const b = node.absoluteBoundingBox;
    out.box = { w: Math.round(b.width), h: Math.round(b.height) };
  }
  if (node.layoutMode) out.layoutMode = node.layoutMode;
  if (node.itemSpacing !== undefined) out.itemSpacing = node.itemSpacing;
  if (node.paddingLeft !== undefined) out.padding = [node.paddingTop, node.paddingRight, node.paddingBottom, node.paddingLeft];
  if (node.primaryAxisAlignItems) out.primaryAxisAlignItems = node.primaryAxisAlignItems;
  if (node.counterAxisAlignItems) out.counterAxisAlignItems = node.counterAxisAlignItems;
  if (node.layoutAlign) out.layoutAlign = node.layoutAlign;
  if (node.layoutGrow !== undefined && node.layoutGrow !== 0) out.layoutGrow = node.layoutGrow;
  if (node.cornerRadius !== undefined) out.cornerRadius = node.cornerRadius;
  if (node.rectangleCornerRadii) out.rectangleCornerRadii = node.rectangleCornerRadii;
  if (node.fills && node.fills.length) out.fills = node.fills.filter(f=>f.visible!==false).map(pickFill);
  if (node.strokes && node.strokes.length) {
    out.strokes = node.strokes.filter(f=>f.visible!==false).map(pickFill);
    out.strokeWeight = node.strokeWeight;
  }
  if (node.effects && node.effects.length) {
    out.effects = node.effects.filter(e=>e.visible!==false).map(e => ({
      type: e.type,
      radius: e.radius,
      offset: e.offset,
      spread: e.spread,
      color: e.color ? rgbToHex(e.color.r, e.color.g, e.color.b) : undefined,
      opacity: e.color ? e.color.a : undefined,
    }));
  }
  if (node.opacity !== undefined && node.opacity !== 1) out.opacity = node.opacity;
  if (node.style) {
    out.textStyle = {
      fontFamily: node.style.fontFamily,
      fontWeight: node.style.fontWeight,
      fontSize: node.style.fontSize,
      lineHeightPx: node.style.lineHeightPx,
      lineHeightPercent: node.style.lineHeightPercentFontSize,
      letterSpacing: node.style.letterSpacing,
      textAlign: node.style.textAlignHorizontal,
      textCase: node.style.textCase,
    };
  }
  if (node.characters !== undefined) out.characters = node.characters;
  if (node.children && node.children.length) {
    out.children = node.children.map(c => simplify(c, depth + 1));
  }
  return out;
}

const simplified = simplify(root, 0);
fs.writeFileSync('./simplified_tree.json', JSON.stringify(simplified, null, 1));
console.log('Written simplified_tree.json, size:', fs.statSync('./simplified_tree.json').size);

// Collect image refs
const imageRefs = new Set();
function collectImages(node) {
  if (node.fills) {
    for (const f of node.fills) {
      if (f.type === 'IMAGE' && f.imageRef) imageRefs.add(f.imageRef);
    }
  }
  if (node.children) node.children.forEach(collectImages);
}
collectImages(simplified);
fs.writeFileSync('./image_refs.json', JSON.stringify([...imageRefs], null, 1));
console.log('Image refs:', imageRefs.size);
