import React from 'react';

export const Route404 = () =>
  <div>
    <h1> 404 </h1>
  </div>


  // state = {
  //     value: '',
  //     select:'',
  //     "gender":'',
  //     style:'',
  //     "color":'',
  //     modal1:'',
  //     modal2: false,
  //     filters:[],
  //     products:[
  //       {"name":"air max 90w","id":0,"price":50,"color":"x","variety":"casual","gender":"female","arrived":"2015-03-27","img":"/images/n1.png"},
  //       {"name":"air max 95g","id":1,"price":70,"color":"x","variety":"casual","gender":"male","arrived":"2015-03-29","img":"/images/n2.png"},
  //       {"name":"air max 90b","id":2,"price":95,"color":"x","variety":"casual","gender":"female","arrived":"2018-03-29","img":"/images/n3.png"},
  //       {"name":"air zoom blc","id":3,"price":10,"color":"x","variety":"casual","gender":"male","arrived":"2018-03-27","img":"/images/n4.png"},
  //       {"name":"air zoom rain","id":4,"price":90,"color":"x","variety":"casual","gender":"female","arrived":"2018-03-25","img":"/images/n5.png"},
  //       {"name":"air max 95r","id":5,"price":80,"color":"red","variety":"running","gender":"male","arrived":"2017-03-28","img":"/images/n6.png"},
  //       {"name":"air max 95rb","id":6,"price":40,"color":"red","variety":"running","gender":"female","arrived":"2017-03-25","img":"/images/n7.png"},
  //       {"name":"air zoom wb","id":7,"price":53,"color":"x","variety":"running","gender":"male","arrived":"2017-03-24","img":"/images/n8.png"},
  //       {"name":"air max 270g","id":8,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v1.png"},
  //       {"name":"air max 270r","id":9,"price":99,"color":"red","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v2.png"},
  //       {"name":"air max 270o","id":10,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v3.png"},
  //       {"name":"flat max 80","id":11,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v4.png"},
  //       {"name":"curve max 70r","id":12,"price":99,"color":"red","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v5.png"},
  //       {"name":"curve max 70b","id":13,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v6.png"},
  //       {"name":"converse yell","id":14,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v7.png"},
  //       {"name":"nike cleetb","id":15,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v8.png"},
  //       {"name":"converse green","id":16,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v9.png"},
  //       {"name":"air max 90 reds","id":17,"price":99,"color":"red","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v10.png"},
  //       {"name":"air max 270 yell","id":18,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v11.png"},
  //       {"name":"flat max white","id":19,"price":99,"color":"white","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v12.png"},
  //       {"name":"sponge max 85","id":20,"price":99,"color":"black","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v13.png"},
  //       {"name":"converse blc","id":21,"price":99,"color":"black","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v14.png"},
  //       {"name":"soft max 85","id":22,"price":99,"color":"white","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v15.png"},
  //       {"name":"white max 85","id":23,"price":99,"color":"white","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v16.png"},
  //       {"name":"nike retro","id":24,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v17.png"},
  //       {"name":"nike wave","id":25,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v18.png"},
  //       {"name":"air max 95blu","id":26,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v19.png"},
  //       {"name":"nike kleety","id":27,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v20.png"},
  //       {"name":"nike hcleet","id":28,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v21.png"},
  //       {"name":"nike forest","id":29,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v22.png"}
  //     ]
  //   }




  {
    state = {
      "value": "",
      "select":"",
      "gender":"",
      "style":"",
      "color":"",
      "modal1":"",
      "modal2": false,
      "filters":[],
      "products":[
        {"name":"air max 90w","id":0,"price":50,"color":"x","variety":"casual","gender":"female","arrived":"2015-03-27","img":"/images/n1.png"},
        {"name":"air max 95g","id":1,"price":70,"color":"x","variety":"casual","gender":"male","arrived":"2015-03-29","img":"/images/n2.png"},
        {"name":"air max 90b","id":2,"price":95,"color":"x","variety":"casual","gender":"female","arrived":"2018-03-29","img":"/images/n3.png"},
        {"name":"air zoom blc","id":3,"price":10,"color":"x","variety":"casual","gender":"male","arrived":"2018-03-27","img":"/images/n4.png"},
        {"name":"air zoom rain","id":4,"price":90,"color":"x","variety":"casual","gender":"female","arrived":"2018-03-25","img":"/images/n5.png"},
        {"name":"air max 95r","id":5,"price":80,"color":"red","variety":"running","gender":"male","arrived":"2017-03-28","img":"/images/n6.png"},
        {"name":"air max 95rb","id":6,"price":40,"color":"red","variety":"running","gender":"female","arrived":"2017-03-25","img":"/images/n7.png"},
        {"name":"air zoom wb","id":7,"price":53,"color":"x","variety":"running","gender":"male","arrived":"2017-03-24","img":"/images/n8.png"},
        {"name":"air max 270g","id":8,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v1.png"},
        {"name":"air max 270r","id":9,"price":99,"color":"red","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v2.png"},
        {"name":"air max 270o","id":10,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v3.png"},
        {"name":"flat max 80","id":11,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v4.png"},
        {"name":"curve max 70r","id":12,"price":99,"color":"red","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v5.png"},
        {"name":"curve max 70b","id":13,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v6.png"},
        {"name":"converse yell","id":14,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v7.png"},
        {"name":"nike cleetb","id":15,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v8.png"},
        {"name":"converse green","id":16,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v9.png"},
        {"name":"air max 90 reds","id":17,"price":99,"color":"red","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v10.png"},
        {"name":"air max 270 yell","id":18,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v11.png"},
        {"name":"flat max white","id":19,"price":99,"color":"white","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v12.png"},
        {"name":"sponge max 85","id":20,"price":99,"color":"black","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v13.png"},
        {"name":"converse blc","id":21,"price":99,"color":"black","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v14.png"},
        {"name":"soft max 85","id":22,"price":99,"color":"white","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v15.png"},
        {"name":"white max 85","id":23,"price":99,"color":"white","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v16.png"},
        {"name":"nike retro","id":24,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v17.png"},
        {"name":"nike wave","id":25,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v18.png"},
        {"name":"air max 95blu","id":26,"price":99,"color":"blue","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v19.png"},
        {"name":"nike kleety","id":27,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v20.png"},
        {"name":"nike hcleet","id":28,"price":99,"color":"orange","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v21.png"},
        {"name":"nike forest","id":29,"price":99,"color":"green","variety":"running","gender":"female","arrived":"2017-03-23","img":"/images/v22.png"}
      ]
    }
  }