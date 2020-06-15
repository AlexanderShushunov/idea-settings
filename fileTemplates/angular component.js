import angular from "angular";
import tmpl from "./${NAME}-tmpl.html"; // for browserify-ng-html2js
import css from "./${NAME}.css"; // for browserify-css

class ${CamelCaseName}Ctrl {
 
}

export default {
    dependencies: [],
    registerComponent: function (moduleName) {
        angular.module(moduleName)
            .component("${CamelCaseName}", {
                templateUrl: "${NAME}-tmpl.html",
                controller: ${CamelCaseName}Ctrl,
                bindings: {
                }
            });
    }
}
