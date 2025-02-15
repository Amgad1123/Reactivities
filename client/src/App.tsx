import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const[activities, setActivites] = useState<Activity[]>([]);

  useEffect(() =>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivites(response.data))

    return () => {}
  }, [])

  return (
    <>
    <Typography variant = 'h3'>Reactivities</Typography>
    <List>
      {activities.map((activity)=> (
        <ListItem key={activity.id}>
          <ListItemText>{activity.title}</ListItemText>
        </ListItem>

      ))}
    </List>
    </>

    )
  }

export default App
