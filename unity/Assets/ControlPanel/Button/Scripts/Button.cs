using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace FiveButtons
{
    public class Button : MonoBehaviour
    {
        public ButtonLight light { get; private set; }
        public UnityAction<int> onPressed;
        
        private ButtonAnim _anim;
        
        private bool _isPressed;

        private void Awake()
        {
            _anim = GetComponent<ButtonAnim>();
            light = GetComponent<ButtonLight>();
        }

        private void OnMouseDown()
        {
            OnPressed();
        }

        private void OnPressed()
        {
            _anim.Play();
            onPressed?.Invoke(GetInstanceID());
        }

        public void State(bool enabled)
        {
            light.State(enabled);
        }
    }
}
