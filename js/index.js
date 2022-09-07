function k_medoid(){
    var meeting_point1 = document.getElementById("form1").elements[0].value;
    var meeting_point2 = document.getElementById("form1").elements[1].value;
    var text_div = document.getElementById("alg_text");
    var text_row = document.getElementById("text_row");
    text_div.innerHTML="";
    if(meeting_point1 !="" && meeting_point1 !=""){
        if(meeting_point1 == meeting_point2){
            text_div.classList.add("text-danger");
            text_div.innerHTML="Die beiden Treffpunkte müssen unterschiedlich sein.";
        }else{
            var n=0;
            //display in DOM
            text_row.classList.remove("justify-content-center");
            text_div.classList.remove("text-danger");
        
            var h0 = document.createElement('h4');
            h0.innerHTML = "<u>Schritt 1:</u>";
            h0.classList.add("mt-3","indie-flower-font");
            text_div.appendChild(h0);

            var div0 = document.createElement('div');
            div0.classList.add("mt-3");
            div0.innerHTML = `<div class='container mb-3'>
                                <div class='row'>
                                    <div class='col-sm-6 ml-1 mt-2'> 
                                        <div class='container px-1'>
                                            <div class='row'>
                                                <p class='px-0'><b>Der Treffpunkt in Cluster 1 ist: </b></p>
                                                <div class='col-4 border'> 
                                                    <div class="d-flex justify-content-center">
                                                        <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point1  + `.svg' /> 
                                                    </div>
                                                    <p class='text-center'>` + meeting_point1  + `</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col-sm-6 ml-1 mt-2'> 
                                        <div class='container px-1'>
                                            <div class='row'>
                                                <p class='px-0'><b>Der Treffpunkt in Cluster 2 ist: </b></p>
                                                <div class='col-4 border'>
                                                    <div class="d-flex justify-content-center">
                                                        <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point2  + `.svg' /> 
                                                    </div> 
                                                    <p class='text-center'>` + meeting_point2  + `</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>` ;
            text_div.appendChild(div0);
           
            do{
                //STEP 2
                n++;
                var distance1 = [];
                var distance2 = [];
                var cluster1=[];
                var cluster2=[];
                var cluster1_names =[];
                var cluster2_names =[];
                var sum1 = 0;
                var sum2=0;
                var c=0;
                //distance to each medoid
                for(i=0; i<house_distances.length; i++){
                    distance1.push(house_distances[i][meeting_point1]);
                    distance2.push(house_distances[i][meeting_point2]);
                }
                //assign to nearer medoid
                for(i=0; i<house_distances.length; i++){
                    if(distance1[i]>distance2[i]){
                        sum2 = sum2 + distance2[i];
                        cluster2.push(house_distances[i]);
                        cluster2_names.push(house_names[i])
                    } else{
                        sum1 = sum1 + distance1[i];
                        cluster1.push(house_distances[i]);
                        cluster1_names.push(house_names[i])
                    }
                }
                //display in DOM
                var h1 = document.createElement('h3');
                h1.innerHTML = "Durchgang "+n;
                h1.classList.add("indie-flower-font","bg-lightblue");
                text_div.appendChild(h1);

                var h2 = document.createElement('h4');
                h2.innerHTML = "<u>Schritt 2:</u>";
                h2.classList.add("mt-3","indie-flower-font");
                text_div.appendChild(h2);

                var p1 = document.createElement('p');
                p1.classList.add('mt-3');
                p1.innerHTML = "<b>Zu Cluster 1 gehören: </b>";
                var p2 = document.createElement('p');
                p2.classList.add('mt-3');
                p2.innerHTML = "<b>Zu Cluster 2 gehören: </b>";

                var div1 = document.createElement('div');
                div1.classList.add('container','border','pt-2','px-0');
                var row1 = document.createElement('div');
                row1.classList.add('row','mx-0');
                var div2 = document.createElement('div');
                div2.classList.add('container','border','pt-2','px-0');
                var row2 = document.createElement('div');
                row2.classList.add('row','mx-0');
                

                var div3 = document.createElement('div');
                div3.classList.add('container','mb-3');
                var row3 = document.createElement('div');
                row3.classList.add('row','px-0');

                var div5= document.createElement('div');
                div5.classList.add('col-sm-6');
                div5.innerHTML = `<p class="mt-2"><b>Der Treffpunkt in Cluster 1 bleibt: </b></p>
                                    <div class='container px-0'>
                                        <div class='row border mx-0'>
                                            <div class='col-4'>
                                                <div class="d-flex justify-content-center">
                                                    <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point1  + `.svg' /> 
                                                </div> 
                                                <p class='text-center'>` + meeting_point1  + `</p>
                                            </div>
                                            <div class='col bg-light border-start'>
                                                <div class='row h-100 align-items-center'>
                                                    <div class='col'>
                                                        <p class='text-center pb-0'>mit einer Summe von etwa `+ sum1.toFixed(1) +` cm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                var div6= document.createElement('div');
                div6.classList.add('col-sm-6');
                div6.innerHTML = `<p class="mt-2"><b>Der Treffpunkt in Cluster 2 bleibt: </b></p>
                                    <div class='container px-0'>
                                        <div class='row border mx-0'>
                                            <div class='col-4'> 
                                                <div class="d-flex justify-content-center">
                                                    <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point2  + `.svg' /> 
                                                </div> 
                                                <p class='text-center'>` + meeting_point2  + `</p>
                                            </div>
                                            <div class='col bg-light border-start'>
                                                <div class='row h-100 align-items-center'>
                                                    <div class='col'>
                                                        <p class='text-center pb-0'>mit einer Summe von etwa `+ sum2.toFixed(1) +` cm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

                //STEP 3
                for(i=0; i<cluster1.length; i++){
                    // display cluster in DOM (actually belongs to step 2)
                    row1.innerHTML += `<div class='col-4'>
                                        <div class="d-flex justify-content-center">
                                            <img class='img-fluid' src='img/SVG2/` + cluster1_names[i] +`.svg' /> 
                                        </div> 
                                        <p class='text-center'>` + cluster1_names[i] + `</p>
                                    </div>`;
                    //search each cluster for the medoid with the minimum distance sum
                    sum_temp = 0;
                    meeting_point_temp=cluster1_names[i];
                    for(j=0; j<cluster1.length ;j++){
                        sum_temp = sum_temp + cluster1[j][meeting_point_temp]
                    }
                    if(sum_temp < sum1){
                        meeting_point1 = meeting_point_temp;
                        sum1 = sum_temp;
                        c++;
                        div5.innerHTML = `<p class="mt-2"><b>Der Treffpunkt in Cluster 1 ändert sich zu: </b></p>
                                            <div class='container px-0'>
                                                <div class='row border mx-0'>
                                                    <div class='col-4'>
                                                        <div class="d-flex justify-content-center">
                                                            <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point1  + `.svg' /> 
                                                        </div> 
                                                        <p class='text-center'>` + meeting_point1  + `</p>
                                                    </div>
                                                    <div class='col bg-light border-start'>
                                                        <div class='row h-100 align-items-center'>
                                                            <div class='col'>
                                                                <p class='text-center pb-0'>mit einer Summe von etwa `+ sum_temp.toFixed(1) +` cm.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
                    }
                };
                for(i=0; i<cluster2.length; i++){
                    // display cluster in DOM (actually belongs to step 2)
                    row2.innerHTML += `<div class='col-4'>
                                            <div class="d-flex justify-content-center">
                                                <img class='img-fluid' src='img/SVG2/` + cluster2_names[i] +`.svg' /> 
                                            </div> 
                                        <p class='text-center'>` + cluster2_names[i] + `</p>
                                    </div>`;
                    //search each cluster for the medoid with the minimum distance sum
                    sum_temp = 0;
                    meeting_point_temp=cluster2_names[i];
                    for(j=0; j<cluster2.length ;j++){
                        sum_temp = sum_temp + cluster2[j][meeting_point_temp]
                    }
                    if(sum_temp < sum2){
                        meeting_point2 = meeting_point_temp;
                        sum2 = sum_temp;
                        c++;
                        div6.innerHTML = `<p class='mt-2'><b>Der Treffpunkt in Cluster 2 ändert sich zu: </b></p>
                                            <div class='container px-0'>
                                            <div class='row border mx-0'>
                                                <div class='col-4'>
                                                    <div class="d-flex justify-content-center">
                                                        <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point2  + `.svg' /> 
                                                    </div> 
                                                    <p class='text-center'>` + meeting_point2  + `</p>
                                                </div>
                                                <div class='col bg-light border-start'>
                                                    <div class='row h-100 align-items-center'>
                                                        <div class='col'>
                                                            <p class='text-center pb-0'>mit einer Summe von etwa `+ sum_temp.toFixed(1) +` cm.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
                    }
                };
                
                //display in DOM
                var wrap_container = document.createElement('div');
                wrap_container.classList.add('container');
                var row0 = document.createElement('div');
                row0.classList.add('row');
                var col1 = document.createElement('div');
                col1.classList.add('col-sm-6');
                var col2 = document.createElement('div');
                col2.classList.add('col-sm-6');
                wrap_container.appendChild(row0);
                row0.appendChild(col1);
                row0.appendChild(col2);
                text_div.appendChild(wrap_container);

                col1.appendChild(p1);
                div1.appendChild(row1);
                col1.appendChild(div1);

                col2.appendChild(p2);
                div2.appendChild(row2);
                col2.appendChild(div2);

                var h3 = document.createElement('h4');
                h3.innerHTML = "<u>Schritt 3:</u>";
                h3.classList.add("indie-flower-font","mt-3","mb-3");
                text_div.appendChild(h3);
                div3.appendChild(row3);
                row3.appendChild(div5);
                row3.appendChild(div6);
                text_div.appendChild(div3);

            } while(c>0);

            //display in DOM
            var h4 = document.createElement('h3');
            h4.innerHTML = "Ergebnis";
            h4.classList.add("indie-flower-font","bg-lightblue");
            text_div.appendChild(h4);

            var div4 = document.createElement('div');
            div4.innerHTML = `<div class ="container">
                                <div class="row">
                                    <div class = "col-sm-6">
                                        <p class='mt-2'><b>Der Treffpunkt in Cluster 1 ist: </b></p>
                                        <div class='container px-0'>
                                            <div class='row border mx-0'>
                                                <div class='col-4'>
                                                    <div class="d-flex justify-content-center">
                                                        <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point1  + `.svg' /> 
                                                    </div> 
                                                    <p class='text-center'>` + meeting_point1  + `</p>
                                                </div>
                                                <div class='col bg-light border-start'>
                                                    <div class='row h-100 align-items-center'>
                                                        <div class='col'>
                                                            <p class='text-center pb-0'>mit einer Summe von etwa `+ sum1.toFixed(1) +` cm, was (`+ sum1.toFixed(1)+` &middot 5) m = `+ sum1.toFixed(1)*5 +` m entspricht.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "col-sm-6">
                                        <p class='mt-2'><b>Der Treffpunkt in Cluster 2 ist: </b></p>
                                        <div class='container px-0'>
                                            <div class='row border mx-0'>
                                                <div class='col-4'>
                                                    <div class="d-flex justify-content-center">
                                                        <img class='img-fluid pt-2' src='img/SVG2/` + meeting_point2  + `.svg' /> 
                                                    </div> 
                                                    <p class='text-center'>` + meeting_point2  + `</p>
                                                </div>
                                                <div class='col bg-light border-start'>
                                                    <div class='row h-100 align-items-center'>
                                                        <div class='col'>
                                                            <p class='text-center pb-0'>mit einer Summe von etwa `+ sum2.toFixed(1) +` cm, was (`+ sum2.toFixed(1)+` &middot 5) m = `+ sum2.toFixed(1)*5 +` m entspricht.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            text_div.appendChild(div4);
        }
    };  
}