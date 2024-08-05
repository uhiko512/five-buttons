using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class ButtonAnim : MonoBehaviour
    {
        private const float HEIGHT = 1.0f;
        private const float PRESSED_HEIGHT = 0.15f;
        private const float SPEED = 0.3f;
        
        public void Play()
        {
            Init();
            InvokeRepeating("Anim", 0.0f, 0.05f);
        }

        private void Init()
        {
            transform.localPosition = Vector3.up * HEIGHT;
            if (IsInvoking("Anim"))
            {
                CancelInvoke();
            }
        }

        private void Anim()
        {
            transform.localPosition -= Vector3.up * SPEED;
            if (transform.localPosition.y > PRESSED_HEIGHT)
            {
                return;
            }

            Init();
        }
    }
}
