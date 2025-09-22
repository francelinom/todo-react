import ChackIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Card from "./components/card";
import Icon from "./components/icon";
import InputCheckbox from "./components/input-checkbox";
import InputText from "./components/input-text";
import Text from "./components/Text";

export default function App() {

  return (
    <div className="grid gap-10 m-5">
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
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={ChackIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-dark" />
        <Icon svg={PlusIcon} className="fill-pink-dark" />
        <Icon svg={SpinnerIcon} animate />
      </div>

      <div>
        <Badge variant="primary">5</Badge>
        <Badge variant="secondary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Adicionar tarefa</Button>
      </div>

      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon}>Adicionar tarefa</ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant="tertiary">Adicionar tarefa</ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant="secondary">Adicionar tarefa</ButtonIcon>
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
      </div>

      <div>
        <Card className="w-60" size="md">
          Texto
        </Card>
      </div>
    </div>
  )
}