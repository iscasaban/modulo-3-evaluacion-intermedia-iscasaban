const callToApi = () => {
  return fetch(
    'https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = {
        id: response.id,
        name: response.name,
        counselor: response.counselor,
        speciality: response.speciality,
      };
      return result;
    });
};

export default callToApi;