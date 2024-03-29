const treatDoggos = (dogs) => {
  let flippedDogsArr = [];

  dogs.forEach((dog) => {
    let copyDog = { ...dog };
    copyDog.hasRabies = !copyDog.hasRabies;
    flippedDogsArr.push(copyDog);
  });

  return flippedDogsArr;
};

module.exports = treatDoggos;
