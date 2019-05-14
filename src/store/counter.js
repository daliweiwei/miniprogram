/**
 * Created by liweiliang 406320591@QQ.com on 2019/5/13 0013 17:04.
 */
import api from "@/utils/flyio"

const state = {
  count: 0
};
const mutations = {
  increment: (state) => {
    state.count += 1;
  },
  decrement:(state) => {
    state.count -= 1;
  }
}
const actions = {
  getDemo(context, params) {
    console.log("getDemo");
    api.getDemo(params).then(data => {
      if(data.code == '000000'){
        console.log(data);
      }else{
        console.log(data.message);
      }
    }).catch(error => {
      console.log(error)
    })
  }


};
const getter = {};
export default {
  state,
  mutations,
  actions,
  getter
};
