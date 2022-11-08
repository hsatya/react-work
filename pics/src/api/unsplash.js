import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZN_koiEk05uZ6avOqiFwOOESgx-whh4c72etJUwUT08",
  },
});
