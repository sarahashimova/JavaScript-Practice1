import {row,col} from './utils';

export function title(block) {
    const tag = block.options.tag ?? 'h1';
    const styles = block.options.styles; 
    return row(col(`<${tag}>${block.value}</${tag}>`),styles)
}

export function text(block) {
    return row(col(`<p>${block.value}</p>`))
}
export function columns(block) {
    
    const html = block.value.map(col).join('');
    return row(html);
}
export function image(block) {
    return row(`<img src="${block.value}"/>`)
}

export const templates={
    title,
    text,
    columns,
    image
}