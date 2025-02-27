function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper (...args) {
    let hash = args.join(',');
    let objectInCache = cache.findIndex((item) => item.hash === hash);

    if (objectInCache != -1) {
      result = cache[objectInCache].result;
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }

    result = func(...args);
    cache.push({
      hash: hash, 
      result: result});
    if (cache.length >= 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper
}

function debounceDecoratorNew(func, delay) {
  let flag = false;
  return function (...args) {
  if (!flag) {
    func(...args);
  }
  clearTimeout(flag);
  flag = setTimeout(() => {func(...args);}, delay);}
}

function debounceDecorator2(func, delay) {
  let flag;
	function wrapper(...args) {
		wrapper.count++;
		if (!flag) {
			func(...args);
		}
		clearTimeout(flag);
		flag = setTimeout(() => {func(...args);}, delay);};
    wrapper.count = 0;
    return wrapper  
}