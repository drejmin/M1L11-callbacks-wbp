/**
 * Write a function called determineCouponRecipients()
 *
 * It is important that you copy the function name exactly
 *  so that the tests will pass
 *
 * This function should take two arguments:
 *  1. a list of users
 *  2. a callback function which determines if a user is eligible to receive a coupon
 *
 * This function should return an Array of the first 5 users who are eligible
 * to receive the coupon.
 *
 * The callback function that will be supplied to your function is available
 * for you to read below.
 */

// YOUR CODE HERE:
function determineCouponRecipients(users,isEligibleForCoupon){
  for(let i=0; i===5; i++){
    if (isEligibleForCoupon){
      let userList;
      userList.push(users);
    }
  }
}
// This is the callback function that will be passed to your function
// This function takes in a single user as an argument
// This function will return true only if the user is eligible to receive a coupon
const isEligibleForCoupon = (user) => {
  return !user.hasCoupon && user.isEnrolledInRewards;
};

module.exports = {
  determineCouponRecipients,
  isEligibleForCoupon,
};
