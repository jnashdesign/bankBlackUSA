let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{}]

document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
        //  console.log(workbook);
        $('.info').css('padding','20px');
         workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            exceljsonObj = rowObject;
            console.log(exceljsonObj);
            for(var i=0;i<exceljsonObj.length;i++){
                //var recordcount = exceljsonObj.length;
                    var data = exceljsonObj[i];
                    if(data['" BANK BLACK USA"']) {
                        data['" BANK BLACK USA"'] = '';
                    }
                    if (data['"THE BANKS\' SERVICES, IMPACT, & HEALTH ARE RATED ACCORDING TO THESE GRADES"']){
                        data['"THE BANKS\' SERVICES, IMPACT, & HEALTH ARE RATED ACCORDING TO THESE GRADES"'] = '';
                    }
                    if(data.__EMPTY == undefined){
                        data.__EMPTY = '';
                    }
                    if(data.__EMPTY_1 == undefined){
                        data.__EMPTY_1 = '';
                    }
                    if(data.__EMPTY_2 == undefined){
                        data.__EMPTY_2 = '';
                    }
                    if(data.__EMPTY_3 == undefined){
                        data.__EMPTY_3 = '';
                    }
                    if(data.__EMPTY_4 == undefined){
                        data.__EMPTY_4 = '';
                    }
                    if(data.__EMPTY_5 == undefined){
                        data.__EMPTY_5 = '';
                    }
                    if(data.__EMPTY_6 == undefined){
                        data.__EMPTY_6 = '';
                    }
                    if(data.__EMPTY_7 == undefined){
                        data.__EMPTY_7 = '';
                    }
                    if(data.__EMPTY_8 == undefined){
                        data.__EMPTY_8 = '';
                    }
                    if(data.__EMPTY_9 == undefined){
                        data.__EMPTY_9 = '';
                    }
                    if(data.__EMPTY_10 == undefined){
                        data.__EMPTY_10 = '';
                    }
                    $('#myTableHeader:last-child').append("<tr><td>"+data[' BANK BLACK USA']+"</td><td>"+data['THE BANKS\' SERVICES, IMPACT, & HEALTH ARE RATED ACCORDING TO THESE GRADES']+"</td></tr>");
                    $('#myTable tbody:last-child').append("<tr><td>"+data.__EMPTY+"</td><td>"+data.__EMPTY_2+"</td><td>"+data.__EMPTY_3+"</td><td>"+data.__EMPTY_4+"</td><td>"+data.__EMPTY_5+"</td><td>"+data.__EMPTY_6+"</td><td>"+data.__EMPTY_7+"</td><td>"+data.__EMPTY_8+"</td><td>"+data.__EMPTY_9+"</td><td>"+data.__EMPTY_10+"</td></tr>");
                }

                $(document).ready( function () {
                    $('#myTable').DataTable();
                } );
         });
        }
    }
});