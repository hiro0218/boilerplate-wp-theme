export default function loadEvents(functions) {
  fire(functions, 'common');

  document.body.className
    .toLowerCase()
    .replace(/-/g, '_')
    .split(/\s+/)
    .forEach((className) => {
      fire(functions, className);
    });
}

function fire(functions, pageName) {
  // ページ名とイベントが一致しているかチェック
  const defaultFunction = 'init';
  const hasFunction = functions[pageName] && typeof functions[pageName][defaultFunction] === 'function';
  if (!hasFunction) return;

  try {
    // 一致したdefault eventを実行
    functions[pageName][defaultFunction]();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}
