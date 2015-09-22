(function(window, undefined){

	/*
	 * @name ajax
	 * @description create a new ajax request
	 * @use ajax('GET', 'myUrl.php', {id: 1}, function(response){}, function(error){})
	 * @param {string} method ajax method
	 * @param {string} url ajax url
	 * @param {object} params ajax params to be encode
	 * @param {function} callback optional success callback
	 * @param {function} error optional error callback
	 **/
	function ajax(method, url, params, callback, error){

		if(typeof method !== 'string'){
			method = 'GET';
		}else{
			method = method.toUpperCase();
		}

		// create a new ajax
		var xhr = new XMLHttpRequest();

		if(method == 'GET'){
			// GET AJAX
			params = encodeParams(params, true);
			xhr.open(method, url+params, true);
			xhr.send();
		}else{
			params = encodeParams(params, false);

			// POST AJAX
			xhr.open(method, url, true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send(params);
		}

		xhr.onreadystatechange = function(){

			// ajax request is finished
			if(xhr.readyState == 4){

				// ajax request status is success
				if(xhr.status == 200){
					if(typeof callback === 'function'){
						var data = {};
						try{
							data=JSON.parse(xhr.response);
						}catch(e){
							data = {};
							console.error('Error: ', e);
						}

						// call the success callback
						callback(xhr, data);
					}
				}else{
					if(typeof error === 'function'){
						error(xhr, xhr.status);
					}
				}
			}
		};

		return xhr;
	};

	window.ajax = ajax;

})(window);