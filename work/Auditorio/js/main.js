
(function(window){

	/*
	* @name remove
	* @description delete an item
	* @param {int} id item
	**/
	function remove(id){

		var name = document.getElementById('name-'+id);
		var result = confirm('Are you sure you want to delete item '+name.value);

		if(!result) return false;

		ajax(
			'GET', 
			'./actions/delete.php', 
			{
				id: id				
			},
			success,
			error
		);
		
		function success(response, data){
			// remove the table tr
			var tr = document.getElementById(id);
			tr.remove();
			console.log('tr', tr);
		};

		function error(response, error){

		};
	};

	/*
	* @name update
	* @description update an item
	* @param {int} id item
	* @param {object} data 
	**/
	function update(id){
		var name = document.getElementById('name-'+id);
		console.log('Updating ', id, name.value);

		// create the ajac request
		ajax(
			'POST', 
			'./actions/update.php', 
			{
				id: 	id, 
				name: 	name.value
			},
			success,
			error
		);

		function success(response, data){
			console.log('Response', response, data);
		};

		function error(response, error){
			console.error('Could not update the item', error)
		};
	};

	function create(){
		var name = document.getElementById('new-name');

		ajax(
			'POST', 
			'./actions/create.php', 
			{
				name: name.value,
			},
			success,
			error
		);

		function success(response, data){
			name.value = '';

			var tr = '<tr>'
						+'<td>'
							+data.item.id
						+'</td>'
						+'<td>'
							+'<input id="name-'+data.item.id+'" value="'+data.item.name+'" onchage="app.update(\''+data.item.id+'\')">'
						+'</td>'
						+'<td>'
							+data.item.created
						+'</td>'
						+'<td>'
							+data.item.updated
						+'</td>'
						+'<td>'
							+'<button onclick="\''+data.item.id+'\'>'
								+'Delete'
							+'</button>'
						+'</td>'
					'</tr>';
		};

		function error(response, error){

		};
	};

	/*
	* @name encodeParams
	* @description encode the url params for the AJAX request
	* @param {object} params
	* @param {boolean} concat optional param
	*/
	function encodeParams(params, concat){
		if(typeof concat !== 'boolean'){
			concat = false;
		}

		var encoded = concat ? '?' : '';

		for(key in params){
			encoded += key+'='+params[key]+'&';
		}

		return encoded;
	};


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
					    	console.log(xhr.response);
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

	// app module
	window.app = {
		'update': update,
		'delete': remove,
		'new': create,
	}
})(window, undefined);