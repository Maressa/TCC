angular.module('JsonCtrl', [])
	.controller('JsonController', function($scope, JsonService) {
		$scope.error = false;
		$scope.errorClass = null;
		$scope.errorMessage = null;

		$scope.readFile = readFile;
		$scope.setJson = setJson;
		
		function readFile(){
			var jsonFile = document.getElementById('jsonFile').files[0];
			var fileReader = new FileReader();
			try{
				fileReader.readAsBinaryString(jsonFile);	
			}catch(exception){
				$scope.errorClass = 'alert alert-danger';
				$scope.errorMessage = exception;
				$scope.error = true;
			}
			fileReader.onload = function(jsonFileRead){
				try{
					JsonService.setJson(jsonFileRead.target.result);
					$scope.errorClass = 'alert alert-success';
					$scope.errorMessage = 'Cool! Now you are good to go. Just click in Draw Canvas';
					$scope.error = true;
					$scope.$apply();
				}catch(exception){
					$scope.errorClass = 'alert alert-danger';
					$scope.errorMessage = exception;
					$scope.error = true;
					$scope.$apply();
				}
			}
		}

		function setJson(){
			try{
				JsonService.setJson($scope.jsonFromInput);
				$scope.errorClass = 'alert alert-success';
				$scope.errorMessage = 'Cool! Now you are good to go. Just click in Draw Canvas';
				$scope.error = true;
			}catch(exception){
				$scope.errorClass = 'alert alert-danger';
				$scope.errorMessage = exception;
				$scope.error = true;
			}
		}
});