import { useDb } from "./../context/dbContext";
import { useState } from "react";


export const useValue = (string, defaultValue) => {
  const {db, ref, set, onValue} = useDb();
  const [value, setValue] = useState(defaultValue);
  const thisRef = ref(db, string);

  onValue(thisRef, (e) => {
    const data = e.val();
    if ( JSON.stringify(data) !== JSON.stringify(value) ) {
      setValue(data);
    }
  });

  const updateValue = (v) => {
    set(thisRef, v);
  };

  return [value, updateValue];
};

//Shortcuts for common usage
export const useVideo = () => useValue("video");
export const useSomthingNested = () => useValue("config/something");
export const useSomethingVariabellyNested = (variable) => useValue(`${variable}/something`);
