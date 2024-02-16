import React, { useEffect, useState } from "react";
import Style from "./Task.module.css";
import SubTask from "./SubTask";

const GroupTaskInfo = ({ item, index, newList, setNewList }) => {
  const [isItem, setIsItem] = useState(item.task);
  console.log("task", newList?.[index]);
  useEffect(() => {
    if (newList) {
      const updateList = [...newList];
      updateList[index] = { ...updateList[index], task: isItem };
      setNewList(updateList);
      console.log("updatelist", updateList);
    }
  }, [isItem]);

  return (
    <div className={Style.task_box}>
      <h4>{item.title}</h4>
      {isItem?.map((Itemsubtask, index) => (
        <SubTask
          key={index}
          index={index}
          setIsItem={setIsItem}
          isItem={isItem}
          Itemsubtask={Itemsubtask}
        />
      ))}
    </div>
  );
};

export default GroupTaskInfo;
