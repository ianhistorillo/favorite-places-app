import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({ route }) => {
  const [loadedPlace, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      console.log(route.params.place);
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlace} />;
};

export default AllPlaces;
