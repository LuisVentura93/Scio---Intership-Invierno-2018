using Microsoft.VisualStudio.TestTools.UnitTesting;
using UTDemo;

namespace UTDemo.Test
{
    [TestClass]
    public class CalcTest
    {
        Calc calc = null;
        [TestInitialize]
        public void SetUp()
        {
            calc = new Calc();
        }


        [TestMethod]
        [DataRow(5,10,15)]
        [DataRow(5, -10, -5)]
        public void SumTest(int a, int b, int total)
        {
            var result = calc.Sum(a, b);
            Assert.AreEqual(result, total);
        }

        [TestMethod]
        [DataRow(5, 10, -5)]
        [DataRow(-5, -10, 5)]
        public void ResTest(int a, int b, int total)
        {
            var result = calc.Rest(a, b);
            Assert.AreEqual(result, total);
        }

        [TestMethod]
        [DataRow(5, 10, 50)]
        [DataRow(-5, -10, 50)]

        public void MultTest(int a, int b, int total)
        {
            var result = calc.Mult(a, b);
            Assert.AreEqual(result, total);
        }

        [TestMethod]
        [DataRow(5, 0, 0)]
        [DataRow(10, 2, 5)]
        [DataRow(0, 2, 0)]
        [DataRow(3, 2, 1.5)]

        public void DivTest(double a, double b, double total)
        {
            var result = calc.Div(a, b);
            Assert.AreEqual(result, total);
        }
    }
}
