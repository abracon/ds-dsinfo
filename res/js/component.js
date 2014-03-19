sap.designstudio.sdk.Component.subclass("de.abracon.dsinfo.DSInfo", function () {

    // Private members: initialize them as you can not be sure that their setters
    // are called before they are accessed for the first time.
    var _resultSet = {
        dimensions : [],
        axis_rows : []
    };

    // Executed after the extension component's handler element has been created.
    this.init = function () {
    };

    // Executed before the properties of the extension component are about to be updated.
    this.beforeUpdate = function () {
    };

    // Executed each time after all properties of the custom extension component
    // have been updated.
    this.afterUpdate = function () {
        // TODO: firePropertiesChanged will make the run time trigger this method once more..
        this.firePropertiesChanged(["numberOfRows", "dimensions"]);
        this.fireEvent('onvaluechange');
    };

    this.numberOfRows = function () {
        return _resultSet.axis_rows && _resultSet.axis_rows.length || 0;
    };

    this.dimensions = function () {
        return _resultSet.dimensions && JSON.stringify(_resultSet.dimensions) || '{}';
    };

    this.resultSet = function (resultSet) {
        if (resultSet === undefined) {
            return _resultSet;
        } else {
            _resultSet = resultSet || {
                dimensions : [],
                axis_rows : []
            };
            return this;
        }
    };
});
