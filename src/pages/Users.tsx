import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Grid} from "@mui/material";
import {AddItemFab} from "../components/Common/AddItemFab.tsx";
import usuarios from "../data/mock/usuarios.ts";
import {DataListType} from "../components/Common/DataListType.ts";
import {DataList} from "../components/Common/DataList.tsx";
import {useState} from "react";
import {UserForm} from "./Users/UserForm.tsx";

export const Users = () => {
  const [
    editState,
    setEditState
  ] = useState<boolean>(false)

  const [
    todosUsuarios,
    setTodosUsuarios
  ] = useState<UserInterface[]>(usuarios)

  const dataList = (): DataListType[] => {
    return todosUsuarios.map((item): DataListType => {
      const active: string = item.deleted ? ' (Inativo)' : ''
      const subtitle: string = item.username

      return {
        itemId: item.uuid,
        avatar: '/public/img/default_user_icon.svg',
        title: `${item.name}${active}`,
        subtitle: `${subtitle}`
      }
    })
  }

  function togglePageState() {
    setEditState(!editState)
  }

  return (
    <>
      <AddItemFab action={togglePageState}/>
      <Content>
        {
          (!editState) ? (
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid item xs={12} sm={10} md={8} xl={6}>
                {todosUsuarios && <DataList items={dataList()}/>}
              </Grid>
            </Grid>
          ) : (
            <UserForm/>
          )
        }
      </Content>
    </>
  )
}
