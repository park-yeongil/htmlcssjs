const member = {
  name: "박영일",
  phone: "01063190125",
  member_id: "ecolo9ger",
  email: "ecolo9ger@gmail.com",
  address: [
    {
      receiverName: "박은실",
      receiverPhone: "01024018788",
      receiverAddress: "제주특별자치도 서귀포시 신서귀로9(법환동, 동남서호)",
      address2: "108동 103호",
    },
    {
        receiverName: "홍길동",
        receiverPhone: "01063190125",
        receiverAddress: "우주나라 어느 별",
        address2: "깐따삐아",
      },
  ],
};
const member2 = member;

member.address[0].receiverName = "박서아";

console.log(member);
console.log(member2);

//깊은 속성값을 복사하려면 참조에 의한 변수이기 때문에 처음의 값도 같이 변하게 되므로 주의를 요함!!


