using System;
using System.Collections.Generic;
using System.Text;

namespace UTDemo
{
    interface IHomework
    {
        /// <summary>
        /// Validate if string is valid time stamp entry,
        /// can be in 24hr or 12 hr, and cold be hr,min and/or sec
        /// </summary>
        /// <param name="time">Time string to validate</param>
        /// <returns></returns>
        String ValidateTime(String time);

        /// <summary>
        /// The password need to be beetween 6 - 20 chars,
        /// has at least 1 lower case char, 1 upper case char
        /// 1 number char and 1 symbol char (valid symbols * - + / _ &)
        /// </summary>
        /// <param name="password">Password String ti validate</param>
        /// <returns></returns>
        String ValidatePassword(String password);

        /// <summary>
        /// The email need to have a domain part and a name part with only on @ on it
        /// valid extensions .com .net .mx .microsoft .gob
        /// </summary>
        /// <param name="email">email to validate</param>
        /// <returns></returns>
        String ValidateEmail(String email);

        /// <summary>
        /// Phone can be from 6 to 10 digits can be separate for - or not
        /// </summary>
        /// <param name="phone">Phone to validate</param>
        /// <returns></returns>
        String ValidatePhone(String phone);

        /// <summary>
        /// Valdiate if the list of numbers separated by comas is part of fibonnaci series.
        /// </summary>
        /// <param name="list">Numbers separated by comas</param>
        /// <returns></returns>
        String ValidateFibonnacci(String list);
    }
}
