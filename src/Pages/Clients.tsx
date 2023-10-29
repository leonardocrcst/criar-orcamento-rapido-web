import {Content} from "../components/Scaffold/Wrapper/Content.tsx";
import {Card, CardContent, Grid} from "@mui/material";
import {useState} from "react";
import {DataListType} from "../components/Common/DataListType.ts";
import {DataList} from "../components/Common/DataList.tsx";
import {AddItemFab} from "../components/Common/AddItemFab.tsx";

export const Clients = () => {
  const clientsMock: DataListType[] = [
    {
      itemId: 1,
      title: "Nome do cliente",
      subtitle: "Observações",
      avatar: '/public/img/default_user_icon.svg'
    },
    {
      itemId: 2,
      title: "Nome do cliente 2",
      subtitle: "Observações",
      avatar: '/public/img/default_user_icon.svg'
    },
    {
      itemId: 3,
      title: "Nome do cliente 3",
      subtitle: "Observações",
      avatar: '/public/img/default_user_icon.svg'
    }
  ]
  const [
    clients
  ] = useState<DataListType[] | undefined>(clientsMock)

  return (
    <>
      <AddItemFab/>
      <Content>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item xs={12} sm={10} md={8} xl={6}>
            <Card>
              <CardContent>
                {clients &&
                    <DataList items={clients}/>
                }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Content>
    </>

  )
}
