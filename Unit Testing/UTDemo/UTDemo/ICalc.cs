using System;
using System.Collections.Generic;
using System.Text;

namespace UTDemo
{
    public interface ICalc
    {
        int Sum(int a, int b);

        int Rest(int a, int b);
        int Mult(int a, int b);

        double Div(double a, double b);
    }
}
