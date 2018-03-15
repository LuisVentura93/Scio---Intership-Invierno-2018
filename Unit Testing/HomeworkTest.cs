using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;

namespace TDDDemo.Test.Homework
{
    [TestClass]
    public class HomeworkTest
    {
        
        [TestMethod]
        [DataRow("07:00:10", "valid")]
        [DataRow("12:00", "valid")]
        [DataRow("12:59:01", "valid")]
        [DataRow("1:10:09", "valid")]
        [DataRow("13:10:9", "valid")]
        [DataRow("17:1:5", "valid")]
        [DataRow("25:60", "no valid")]
        [DataRow("12:1", "valid")]
        [DataRow("08:15:", "no valid")]
        [DataRow("09:61", "no valid")]
        public void ValidTimeTest()
        {

        }
        [TestMethod]
        [DataRow("qwerTy_1", "valid")]
        [DataRow("1mYpassword", "no valid")]
        [DataRow("M/P4sswrod", "valid")]
        [DataRow("Mo0n+", "no valid")]
        [DataRow("asd#123MAsd", "no valid")]
        [DataRow("p4ass*worD", "valid")]
        [DataRow("noNon0N0&", "valid")]
        [DataRow("1234567890", "no valid")]
        [DataRow("_4everLoco", "valid")]
        [DataRow("Pxndi+4sRoj0s", "valid")]
        public void ValidPasswordTest()
        {

        }

        [TestMethod]
        [DataRow("cestrada@sciodev.com", "valid")]
        [DataRow("mymail", "no valid")]
        [DataRow("a@s.com", "valid")]
        [DataRow("a@domaintest.test", "no valid")]
        [DataRow("mymail@dominos.gov", "valid")]
        [DataRow("other@dominio.microsoft.mx", "no valid")]
        [DataRow("a.com@a.com", "no valid")]
        [DataRow("CHOCOLATES@TECOMES.MX", "valid")]
        [DataRow("nomolest@r.com", "valid")]
        [DataRow("one@two.three", "no valid")]
        public void ValidEmailTest()
        {

        }

        [TestMethod]
        [DataRow("4445-34-32-21", "valid")]
        [DataRow("44", "no valid")]
        [DataRow("asdasd", "no valid")]
        [DataRow("44559987", "valid")]
        [DataRow("044-14-25", "valid")]
        [DataRow("12:1598", "no valid")]
        [DataRow("(443)-15-15-48", "no valid")]
        [DataRow("443 15 15-48", "valid")]
        [DataRow("259-358", "valid")]
        [DataRow("12-12", "no valid")]
        public void ValidPhoneTest()
        {

        }

        
        [TestMethod]
        [DataRow("1", "valid")]
        [DataRow("1,1", "valid")]
        [DataRow("1,2", "valid")]
        [DataRow("1,3", "no valid")]
        [DataRow("8,13,21,34", "valid")]
        [DataRow("1,2,3,5,8", "valid")]
        [DataRow("89,144", "valid")]
        [DataRow("fibo", "no valid")]
        [DataRow("6765", "valid")]
        [DataRow("1,2,4,5,8", "no valid")]
        public void ValidFibonnaciTest()
        {

        }

    }
}
