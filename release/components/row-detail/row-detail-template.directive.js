"use strict";
var core_1 = require('@angular/core');
var DatatableRowDetailTemplateDirective = (function () {
    function DatatableRowDetailTemplateDirective(template) {
        this.template = template;
    }
    ;
    DatatableRowDetailTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[swui-datatable-row-detail-template]'
                },] },
    ];
    /** @nocollapse */
    DatatableRowDetailTemplateDirective.ctorParameters = [
        { type: core_1.TemplateRef, },
    ];
    return DatatableRowDetailTemplateDirective;
}());
exports.DatatableRowDetailTemplateDirective = DatatableRowDetailTemplateDirective;
//# sourceMappingURL=row-detail-template.directive.js.map