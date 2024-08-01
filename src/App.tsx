import { AppContainer } from "./styles";
import {Column} from "./Column"
import { AddNewItem } from "./AddNewItem";

export const App = () => {
  return (
    <AppContainer>
      <Column text ="Todo:"></Column>
      {/* <Column text ="In Progress:"></Column> */}
      <AddNewItem
         toggleButtonText = "+ Add another list"
         onAdd={console.log}
      />
    </AppContainer>
  )
}