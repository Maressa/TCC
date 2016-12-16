angular.module('JsonAdpter', [])
    .service('JsonAdapter', function () {
        self = this;

        var headers = [];

        self.convertJsonObjectToValuesMatrix = convertJsonObjectToValuesMatrix;
        self.getHeaders = getHeaders;

        function convertJsonObjectToValuesMatrix(jsonObjectFromInput){
            jsonObjectFromInput = _.unzip(jsonObjectFromInput);
            var jsonConverted = [];
            var line = 0;
            var jsonConvertedLine = 0;
            for(line = 0; line < jsonObjectFromInput.length && jsonConvertedLine < jsonObjectFromInput.length/2; line++){
                jsonConverted[jsonConvertedLine] = [];
                if(line%2 === 0){
                    headers[jsonConvertedLine] = jsonObjectFromInput[line][0];
                }else{
                    jsonConverted[jsonConvertedLine] = jsonObjectFromInput[line];
                    jsonConvertedLine++;
                }
            }
            return jsonConverted;
        }

        function getHeaders(){
            return headers;
        }

        return {
            convertJsonObjectToValuesMatrix : self.convertJsonObjectToValuesMatrix,
            getHeaders: self.getHeaders
        };
});