import {Form} from "../../components/Common/Form.tsx";
import {Typography} from "@mui/material";
import {useState} from "react";

interface UserFormProps {
  userData?: UserInterface
  userSave?: (user: UserInterface) => void
}

export const UserForm = (props: UserFormProps) => {
  const emptyUser: UserInterface = {}
  const [
    userState,
    setUserState
  ] = useState<UserInterface>(props.userData ?? emptyUser)

  function handleUserData(field: string, value: string) {
    setUserState({...userState, [field]: value})
  }

  function handleSave() {
    if (props.userSave) {
      props.userSave(userState)
    }
  }

  return (
    <Form title={"Usuário"}>
      <Typography>Teste...</Typography>
    </Form>
  )
}
