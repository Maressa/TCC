angular.module('JsonService', [])
    .service('JsonService', function (JsonAdapter, $http) {
        self = this;

        var headers = [];
        var matrixValuesOnly = [];
        
        self.getHeaders = getHeaders;
        self.getMatrixValuesOnly = getMatrixValuesOnly;
        self.setJson = setJson;

        function getHeaders(){
            return headers;
        }

        function getMatrixValuesOnly(){
            return matrixValuesOnly;
        }

        function setJson(jsonFromInput){
            try{
                jsonFromInput = JSON.parse(jsonFromInput);
                matrixValuesOnly = JsonAdapter.convertJsonObjectToValuesMatrix(jsonFromInput);
                headers = JsonAdapter.getHeaders();
            }catch(exception){
                throw exception;
            }
        }
        
        return {
            getHeaders: self.getHeaders,
            getMatrixValuesOnly: self.getMatrixValuesOnly,
            setJson: self.setJson
        };
});