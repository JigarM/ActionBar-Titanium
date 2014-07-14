function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId5 = [];
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "48dp",
        font: {
            fontSize: "18sp"
        },
        title: "Actions bar",
        value: "actions",
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "48dp",
        font: {
            fontSize: "18sp"
        },
        title: "Tabs",
        value: "tabs",
        id: "__alloyId7"
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId5,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.table.addEventListener("click", function(e) {
        var controller = Alloy.createController(e.row.value);
        controller.getView().open();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;