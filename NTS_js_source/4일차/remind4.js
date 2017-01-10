function distance(pos1, pos2) {
  if ((!Array.isArray(pos1) && pos1.length !== 2 )|| (!Array.isArray(pos2) && pos2.length !== 2)){
    return "2차원 좌표를 입력해주세요.";
  }

  xDistance = Math.pow(pos1[0] - pos2[0], 2);
  yDistance = Math.pow(pos1[1] - pos2[1], 2);

  return Math.sqrt(xDistance + yDistance);
}

console.log(distance([1, 1], [4,5]));
