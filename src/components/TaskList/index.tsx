import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { Trash, PlusCircle, ClipboardText } from "phosphor-react";

import {styles} from "./styles";
import { v4 as uuidv4 } from "uuid";

interface TaskProps {
  id: string;
  title: string;
  conclude: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCount, setTaskCount] = useState("");
  const [taskConcludeCount, setTaskConcludeCount] = useState("");

  function handleCreateTask() {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      conclude: false,
    };

    setTasks(tasks => [...tasks, newTask]);

    setTaskTitle("");
  }

  function handleConcludeTask(id: string) {
    let completedItemList = tasks.map((item) => {
      if (id == item.id) {
        if (item.conclude == false) {
          return { ...item, conclude: true };
        } else {
          return { ...item, conclude: false };
        }
      }
      return item;
    });

    setTasks(completedItemList);
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Remover", "Deseja remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () => setTasks(task => task.filter((task) => task.id !== id))
      },
      {
        text: "Nao",
        style: "cancel",
      },
    ]);
  }

  useEffect(() => {
    const value = tasks.length.toString();
    setTaskCount(value);

    let taskConcludeCount = tasks.reduce((sum, task) => {
      if (task.conclude == true) {
        return (sum += 1);
      }

      return sum;
    }, 0);

    let text = "0";

    if (tasks.length > 0) {
      text = `${taskConcludeCount} de ${value}`;
    }

    setTaskConcludeCount(text);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            value={taskTitle}
            onChangeText={setTaskTitle}
            placeholder="Adicione uma nova tarefa"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleCreateTask}>
            <Text>Criar</Text>
            <PlusCircle size={17} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text>
            Tarefas criadas
            <Text>{taskCount}</Text>
          </Text>
          <Text>
            Concluidas
            <Text>{taskConcludeCount}</Text>
          </Text>
        </View>

        <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ task }) => (
          <View style={styles.card}>
                <CheckBox
                  boxType="circle"
                  tintColor="#4EA8DE"
                  onCheckColor="#F2F2F2"
                  onFillColor="#5E60CE"
                  value={task.conclude}
                  onValueChange={() => handleConcludeTask(task.id)}
                />
                <Text>{task.title}</Text>

                <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
                  <Trash size={24} />
                </TouchableOpacity>
              </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.cardList}>
            <View>
              <ClipboardText size={56} style={{ marginTop: 64 }} />
              <Text>
                <Text>Você ainda não tem tarefas cadastradas</Text>
                <br />
                <Text>Crie tarefas e organize seus itens a fazer</Text>
              </Text>
            </View>
          </View>
        )}
      />
      </View>
    </View>
  );
}