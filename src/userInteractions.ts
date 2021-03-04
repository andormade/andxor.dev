const userInteractions = function () {
	let busyTimeout, loadingTimeout;
	const onClick = function () {
		document.documentElement.classList.add('cursor-loading');
		document.documentElement.classList.add('cursor-busy');
		clearTimeout(busyTimeout);
		busyTimeout = setTimeout(function () {
			document.documentElement.classList.remove('cursor-busy');
		}, 200);
		clearTimeout(loadingTimeout);
		loadingTimeout = setTimeout(function () {
			document.documentElement.classList.remove('cursor-loading');
		}, 2000);
	};

	document.addEventListener('click', onClick);
};

export default userInteractions;
