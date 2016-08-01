function createTable(data) {
    var html = '';
    
    // Assume data is an array of arrays,
    // containing strings.

    html += '<table class="data">';
    
    // Step through the rows of the data.
    for(var row in data) {
        var rowData = data[row];
        
        if(row == 0) {
            html += '<tr style="font-weight: bold;">';
        }
        else {
            html += '<tr>';
        }
        
        // Step through the columns in
        // this row.
        for(var col in rowData) {
            var colData = rowData[col];
            
            html += '<td>';
            html += colData;
            html += '</td>';
        }
        
        html += '</tr>';
    }
    
    html += '</table>';
    
    return html;
}