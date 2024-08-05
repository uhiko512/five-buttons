using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class PurpleShow : Show
    {
        private const float SPEED = 0.005f;
        private const float RADIUS = 1.0f;
        private const float CIRCLE_RADIUS = 0.7f;
        private const float Y = 2.0f;

        protected override Color GetColor() => new Color(0.6f, 0.0f, 1.0f);

        protected override void Anim()
        {
            for (var i = 0; i < _balls.Length; i++)
            {
                _balls[i].transform.localPosition = CalcPos(i);
            }
        }

        private Vector3 CalcPos(int i)
        {
            var angleOffset = 2 * Mathf.PI * (i / 3.0f);
            var t = _time * SPEED + angleOffset;
            var circleT = (Mathf.Sin(t * 5f) * 0.5f + 0.5f) * -Mathf.PI;
            
            var x = Mathf.Cos(t) * RADIUS;
            var z = Mathf.Sin(t) * RADIUS;
            var forward = new Vector3(x, 0, z);
            var circle = (forward * Mathf.Cos(circleT) + Vector3.up * Mathf.Sin(circleT)) * CIRCLE_RADIUS;
            var pos = forward + Vector3.up * Y + circle;
            
            return pos;
        }
    }
}
