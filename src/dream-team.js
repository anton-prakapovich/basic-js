module.exports = function createDreamTeam( members ) {
  if ( !Array.isArray(members) ) return false;
  let arr = [];
  for ( let i = 0; i < members.length; i++ ) {
    if ( typeof members[i] === "string" ) {
      members[i] = members[i].trim();
      arr.push(members[i][0].toUpperCase());
    }
  }
  return arr.sort().join("");  
};