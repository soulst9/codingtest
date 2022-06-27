// a core meltdown just happened at a local nuclear plant! They need to move all of their rods(in groups) to lead isolation chambers using specialized, 
// radiation hardened robots. There is a cost of moving the rods associated with the square root of ther nuber of rods lifted. Lifting four rods costs twice the cost of lifting one rod as 4 = 2 and 1 = 1. Any remaining fraction, such as 3 = 1.732 is raised to the next integer, i.e ceiing(3) = 2.
// Given a list of fused pairs of nuclear fuel rods, determine all of the fused groups, then cacluate the total cost of moving the rods to isolation.
// For example, assume there are 10 fuel rods labeled 1 - 10. Pairs of rods are [1,3], [1,4] and [2,6]. There are two groups of fused rods: {1,3,4} and {2,6}. The first group costs ceiling(3) = 2 units to move. The second costs ceiling(2) = 2 units. The remaining 5 rods each cost celing(1) = 1 unit to move which yields a total of 2+2+5=9 units cost 



// 노심 멜트다운이 지역 원자력 발전소에서 발생했습니다! 그들은 특수화된 방사선 경화 로봇을 사용하여 격리 챔버를 이끌기 위해 모든 로드(그룹으로)를 이동해야 합니다. 들어 올려진 막대의 수의 제곱근과 관련된 막대를 이동하는 비용이 있습니다. 
// 막대 4개를 드는 비용은 막대 1개를 드는 비용의 두 배인 4 = 2 및 1 = 1입니다. 3 = 1.732와 같은 나머지 분수는 다음 정수, 즉 ceiing(3) = 2로 올라갑니다.
// 핵연료봉의 융합된 쌍의 목록이 주어지면 모든 융합된 그룹을 결정한 다음 봉을 격리로 옮기는 데 드는 총 비용을 계산하십시오.
// 예를 들어, 1 - 10으로 표시된 10개의 연료봉이 있다고 가정합니다. 봉의 쌍은 [1,3], [1,4] 및 [2,6]입니다. 융합 막대에는 {1,3,4} 및 {2,6}의 두 그룹이 있습니다. 
// 첫 번째 그룹의 비용은 한도(3) = 2단위 이동입니다. 두 번째 비용 상한선(2) = 2단위. 나머지 5개 막대는 각각 celing(1) = 1 단위 이동 비용으로 총 2+2+5=9 단위 비용이 발생합니다.

// console.log(Math.ceil(Math.sqrt(4)))
// console.log(Math.ceil(Math.sqrt(3)))
// console.log(Math.ceil(Math.sqrt(2)))
// console.log(Math.ceil(Math.sqrt(1)))


// const n = 8
// const arr = [[8,1], [5,8], [7,3], [8,6]]
const n = 4
const arr = [[1,2], [1,4]]

const used_set = new Set()
function mergeRods(startIndex, merge_arr) {
  let result = []
  used_set.add(startIndex)
  for(let i = 0; i < merge_arr.length; i++) {
    const findNumber = merge_arr[i]
    for (let j = 0; j < arr.length; j++) {
      if (used_set.has(j)) {
        continue
      }

      if (arr[j].includes(findNumber)) {
        result = [...result, ...arr[j]]
        used_set.add(j)
      }
    }
  }
  return result
}

const moveRods = []
for (let i = 0; i < arr.length; i++) {
  if (used_set.has(i)) continue;
    const result = mergeRods(0, arr[i])
    if (result.length) {
      const set = new Set([...result, ...arr[i]])
      moveRods.push(set)
    }
}

// console.log(moveRods)

function cacluateCost(rods) {
  let cost = 0
  let sum_rods = 0
  for (var i = 0; i < rods.length; i++) {
    cost += Math.ceil(Math.sqrt(rods[i].size))
    sum_rods += rods[i].size
  }
  
  return cost + (n - sum_rods)
}

const totalCost = cacluateCost(moveRods)
console.log("================")
console.log('totalCost', totalCost)
console.log("================")

