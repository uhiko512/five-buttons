using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class BlueShow : Show
    {
        private const float SPEED = 0.005f;
        private const float RADIUS = 1.0f;
        private const float CIRCLE_RADIUS = 0.3f;
        private const float Y = 1.8f;

        protected override Color GetColor() => new Color(0.1f, 0.27f, 1.0f);

        protected override void Anim()
        {
            for (var i = 0; i < _balls.Length; i++)
            {
                _balls[i].transform.localPosition = CalcPos(i);
            }
        }

        private Vector3 CalcPos(int i)
        {
            var angleOffset = 2 * Mathf.PI * (i / (float) _balls.Length);
            var t = _time * SPEED + angleOffset;
            var circleT = t * 10f;
            
            var x = Mathf.Cos(t) * RADIUS;
            var z = Mathf.Sin(t) * RADIUS;
            var forward = new Vector3(x, 0, z);
            var right = Vector3.Cross(forward, Vector3.up);
            var circle = (right * Mathf.Cos(circleT) + Vector3.up * Mathf.Sin(circleT)) * CIRCLE_RADIUS;
            var pos = forward + Vector3.up * Y + circle;
            
            return pos;
        }
    }
}
