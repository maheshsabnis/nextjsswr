import axios from "axios";
import useSWR from "swr";
import Image from "next/image";

  const address = `http://localhost:3000/api/friends`;  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(address, fetcher);
  const addFriend = async () => {
    const newUser = {
      name: "Robbie Doe",
      location: "Lagos",
      age: 20,
      email: "rb@doe.com",
      image:
        "https://www.shareicon.net/data/2016/09/15/829474_user_512x512.png",
    };
    await fetcher(address, { 
      method: "POST",
      body: JSON.stringify(newUser),
    });
    mutate(address);
  };