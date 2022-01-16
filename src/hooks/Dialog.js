import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { createContext, useContext, useState } from 'react';
import axios from "../api"
const DialogContext = createContext({
  showCreateTask: false,
  showEditTask: false,
  showTaskDetail: false,
  username: "",
  tasks: [],
  state:"sign_in",
  taskState: "A_all",
  authToken:"",
  taskID:"",
  taskDetail:{},
  color:[],
  applicants:[],
  account:{},
  profile:{},
  EditPro:false,
  changeUserName: () => {},
  getTasks: () => {},
  changeShowEditTask: () => {},
  changeShowCreateTask: () => {},
  changeShowTaskDetail: () => {},
  changeState: () => {},
  changeTask: () => {},
  getAuthToken: () => {},
  getTaskDetail: () => {},
  getProfile: () => {},
  getApplicants: () => {},
  cheangeEditPro: () => {},
});

const DialogProvider = (props) => {
  const [showCreateTask, setshowCreateTask] = useState(false);
  const [showEditTask, setshowEditTask] = useState(false);
  const [showTaskDetail,  setShowTaskDetail] =  useState(false);
  const[username, setUsername] = useState("")
  const[profile, setProfile] = useState({})
    const[tasks, setTasks] = useState([])
    const[state, setState] = useState("sign_in")
    const[taskState, setTaskState] = useState(2)
    const [authToken, setAuthToken] = useState("")
    const[taskID, setTaskID] = useState("")
    const[taskDetail, setTaskDetail] = useState("")
    const[color, setColor] = useState(["#4f4f4f","#B39DDB","#EEEEEE"])
    const[applicants, setApplicants] = useState([])
    const[editPro,setEditPro] = useState(false)
    const[account, setAccount]= useState({})


    const cheangeEditPro = () => {
      setEditPro(!editPro)
    }
    const getApplicants = (newApp) => {
      setApplicants(newApp)
    }

    const getTaskDetail = (newData) => {
      setTaskDetail(newData)
    }
    const getAuthToken = (authToken) => {
      setAuthToken(authToken)
    } 

    const changeUserName = (name) => {
        setUsername(name)
    }
    const getTasks = async(type) => {
        const {
            data
        } =  await axios.get('/task/', {
            params: {
                type
            }
          })
    }

    const getProfile = (profile, account) => {
       setAccount(account)
      setProfile(profile)
    } 

    const changeTask = (newState) => {
      changeState("main")
      setTaskState(newState)
   
    }

    const changeState = (newState) => {
        setState(newState)
    }
    
  const changeShowCreateTask = () => {
    setshowCreateTask(!showCreateTask)
  }
  const changeShowEditTask = () => {
    setshowEditTask(!showEditTask)
  }
  const changeShowTaskDetail = (ID) => {
      setShowTaskDetail(!showTaskDetail)
      setTaskID(ID)
  }

  return (
    <DialogContext.Provider
      value={{
        username,
        tasks,
        state,
        taskState,
        color,
        changeUserName,
        getTasks,
        showCreateTask,
        showEditTask,
        showTaskDetail,
        changeShowCreateTask,
        changeShowTaskDetail,
        changeShowEditTask,
        changeState,
        changeTask,
        authToken,
        getAuthToken,
        taskID,
        taskDetail,
        getTaskDetail,
        profile,
        account,
        getProfile,
        applicants,
        getApplicants,
        editPro,
        cheangeEditPro
      }}
      {...props}
    />
  );
};

function useDialog() {
  return useContext(DialogContext);
}

export { DialogProvider, useDialog};