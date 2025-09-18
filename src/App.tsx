import ChackIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import Badge from "./components/badge";
import Icon from "./components/icon";
import Text from "./components/Text";

export default function App() {

  return (
    <div className="grid gap-1">
      <div className="flex flex-col gap-4 p-4">
        <Text variant="body-md-bold" className="text-pink-base">
          Olá Mundo - ToDo List
        </Text>

        <Text variant="body-md" className="text-green-dark">
          Olá Mundo - ToDo List
        </Text>

        <Text variant="body-sm-bold" className="text-gray-400">
          Olá Mundo - ToDo List
        </Text>

        <Text>
          Olá Mundo - ToDo List
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base"/>
        <Icon svg={ChackIcon} className="fill-green-base"/>
        <Icon svg={PencilIcon} className="fill-green-dark"/>
        <Icon svg={PlusIcon} className="fill-pink-dark"/>
        <Icon svg={SpinnerIcon} animate />
      </div>

      <div>
        <Badge variant="primary">5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
      </div>
    </div>
  )
}