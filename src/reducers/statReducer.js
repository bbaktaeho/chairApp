import types from "../actions_2/types";

const initState = {
  statData: {
    data1: 0,
    data2: 0,
    data3: 0,
    data4: 0,
    data5: 0,
    data6: 0,
    data7: 0,
    data8: 0,
    data9: 0
  }
};

export default statdata = (state = initState, action) => {
  switch (action.type) {
    case types.UP:
      return {
        statData: {
          data1: action.payload,
          data2: action.payload2,
          data3: action.payload3,
          data4: action.payload4,
          data5: action.payload5,
          data6: action.payload6,
          data7: action.payload7,
          data8: action.payload8,
          data9: action.payload9
        }
      };
    case types.PLUS_1:
      return {
        statData: {
          data1: state.statData.data1 + parseInt(action.payload),
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_2:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2 + action.payload,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_3:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3 + action.payload,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_4:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4 + action.payload,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_5:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5 + action.payload,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_6:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6 + action.payload,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_7:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7 + action.payload,
          data8: state.statData.data8,
          data9: state.statData.data9
        }
      };
    case types.PLUS_8:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8 + action.payload,
          data9: state.statData.data9
        }
      };
    case types.PLUS_9:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          data7: state.statData.data7,
          data8: state.statData.data8,
          data9: action.payload
        }
      };
    default:
      return state;
  }
};
