import friends from './data';

const genderList = {
  male: null,
  female: null,
  apache: null,
  other: null,
  shemale: null,
};

const getAverageChildren = () => {
  const withChildren = friends.filter((friend) => friend.hasChildren);
  const withoutChildren = friends.filter((friend) => !friend.hasChildren);

  return withChildren > withoutChildren;
};

const getAverageAge = () => {
  const age =
    friends.reduce((acc, friend) => {
      acc += friend.age;
      return acc;
    }, 0) / friends.length;

  return age;
};

const getAverageGender = () => {
  friends.forEach((friend) => {
    if (friend.gender === "apache") {
      return genderList.apache++;
    }
    if (friend.gender === "male") {
      return genderList.male++;
    }
    if (friend.gender === "female") {
      return genderList.female++;
    }
    if (friend.gender === "shemale") {
      return genderList.shemale++;
    }
    if (!Object.values(genderList).includes(friend.gender)) {
      return genderList.other++;
    }
  });

  const max = Object.entries(genderList).sort((a, b) => b[1] - a[1]);

  return max[0];
};

const averageFriend = {
  age: getAverageAge(),
  gender: getAverageGender(),
  hasChildren: getAverageChildren(),
};

console.log(averageFriend);
