export class TheCatAPI{
    #BASE_URL="https://api.thecatapi.com/v1";
    #KEY = "live_FvLmPFtXnijmlZ0r6e39oF7qg20pr4OXj0Nmd0OfwGUlDuQ7hlwT2VbLF7RRksIu";
 
    getCatBreeds() {
        const url = `${this.#BASE_URL}/breeds`;

        return fetch(url,{headers:{'x-api-key':this.#KEY}}).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error=>console.log(error))
    };

    getCatInfo(breedId) {
        const url = `${this.#BASE_URL}/images/search?breed_ids=${breedId}`;

        return fetch(url,{headers:{'x-api-key':this.#KEY}}).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error=>console.log(error))
    };
};
