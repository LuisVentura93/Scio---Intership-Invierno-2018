using System;
using System.Collections.Generic;
using System.Text;

namespace UTDemo 
{
    public class Calc : ICalc
    {
        public double Div(double a, double b)
        {
            if (b == 0)
            {
                return 0;
            }
            return a / b;
        }

        public int Mult(int a, int b)
        {
            return a * b;
        }

        public int Rest(int a, int b)
        {
            return a - b;
        }

        public int Sum(int a, int b)
        {
            return a + b;
        }

        
    }
}
